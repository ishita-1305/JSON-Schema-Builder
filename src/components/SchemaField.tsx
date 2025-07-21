// components/SchemaField.tsx

import React from "react";
import { Input, Select, Button, Row, Col, Card, Divider, Tooltip } from "antd";
import {
  PlusOutlined,
  CloseCircleOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";

const { Option } = Select;

interface Props {
  control: any;
  name: string;
  remove: () => void;
}

const SchemaField: React.FC<Props> = ({ control, name, remove }) => {
  const { watch } = useFormContext();
  const type = watch(`${name}.type`);

  const {
    fields,
    append,
    remove: removeChild,
  } = useFieldArray({
    control,
    name: `${name}.children`,
  });

  const fieldTypeOptions = [
    "string",
    "number",
    "boolean",
    "objectId",
    "float",
    "nested",
  ];

  return (
    <Card
      type="inner"
      style={{
        marginBottom: 16,
        backgroundColor: "#fafafa",
        borderRadius: 12,
        border: "1px solid #d9d9d9",
      }}
      size="small"
      bodyStyle={{ paddingBottom: 10 }}
    >
      <Row gutter={12} align="middle">
        <Col flex={3}>
          <Controller
            name={`${name}.key`}
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Field name" />
            )}
          />
        </Col>

        <Col flex={2}>
          <Controller
            name={`${name}.type`}
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Type" style={{ width: "100%" }}>
                {fieldTypeOptions.map((type) => (
                  <Option key={type} value={type}>
                    {type}
                  </Option>
                ))}
              </Select>
            )}
          />
        </Col>

        <Col>
          <Tooltip title="Delete Field">
            <Button
              danger
              shape="circle"
              icon={<CloseCircleOutlined />}
              onClick={remove}
            />
          </Tooltip>
        </Col>
      </Row>

      {type === "nested" && (
        <div style={{ paddingLeft: 24, marginTop: 16 }}>
          <Divider orientation="left">
            <FolderOpenOutlined /> Nested Fields
          </Divider>

          {fields.map((subField, idx) => (
            <SchemaField
              key={subField.id}
              control={control}
              name={`${name}.children.${idx}`}
              remove={() => removeChild(idx)}
            />
          ))}

          <Button
            type="dashed"
            icon={<PlusOutlined />}
            onClick={() => append({ key: "", type: "string", children: [] })}
            block
            style={{
              marginTop: 10,
              borderColor: "#1890ff",
              color: "#1890ff",
            }}
          >
            Add Nested Field
          </Button>
        </div>
      )}
    </Card>
  );
};

export default SchemaField;
