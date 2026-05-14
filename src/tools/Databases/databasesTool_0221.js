/**
 * Generated Tool: databasesTool_0221
 * Domain: Databases
 * ID: 0221
 */
exports.databasesTool_0221 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0221:', error);
    throw error;
  }
};
