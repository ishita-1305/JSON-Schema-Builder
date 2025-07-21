import React from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { Button, Row, Col, Typography, Space, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import SchemaField from "./SchemaField";
import { buildJson } from "./buildJson.1";

const { Title } = Typography;

interface FormValues {
  fields: any[];
}

const SchemaBuilder = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      fields: [],
    },
  });

  const { control, watch } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const liveFields = watch("fields");

  return (
    <FormProvider {...methods}>
      <Row
        gutter={32}
        style={{
          padding: "48px",
          backgroundColor: "rgba(255, 255, 255, 0)",
          minHeight: "100vh",
        }}
      >
        <Col span={14}>
          <Card
            bordered={false}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: 20,
              padding: "32px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
              color: "#fff",
            }}
          >
            <Title level={3} style={{ color: "#fff", marginBottom: 24 }}>
              Define Your Fields
            </Title>

            {fields.map((field, index) => (
              <SchemaField
                key={field.id}
                control={control}
                name={`fields.${index}`}
                remove={() => remove(index)}
              />
            ))}

            <Space
              direction="vertical"
              style={{ width: "100%", marginTop: 24 }}
            >
              <Button
                type="primary"
                block
                icon={<PlusOutlined />}
                onClick={() =>
                  append({ key: "", type: "string", children: [] })
                }
                style={{
                  borderRadius: 10,
                  fontWeight: "bold",
                  height: 45,
                  backgroundColor: "#ffffff",
                  color: "#000",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                Add Field
              </Button>
            </Space>
          </Card>
        </Col>
        <Col span={10}>
          <Card
            title={<span style={{ color: "white" }}>JSON Preview</span>}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: 20,
              boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
              color: "#fff",
            }}
          >
            <pre
              style={{
                fontSize: 14,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                color: "#fff",
              }}
            >
              {JSON.stringify(buildJson(liveFields), null, 2)}
            </pre>
          </Card>
        </Col>
      </Row>
    </FormProvider>
  );
};

export default SchemaBuilder;
