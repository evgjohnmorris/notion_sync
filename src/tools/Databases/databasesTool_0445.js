/**
 * Generated Tool: databasesTool_0445
 * Domain: Databases
 * ID: 0445
 */
exports.databasesTool_0445 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0445:', error);
    throw error;
  }
};
