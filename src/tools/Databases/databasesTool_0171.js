/**
 * Generated Tool: databasesTool_0171
 * Domain: Databases
 * ID: 0171
 */
exports.databasesTool_0171 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0171:', error);
    throw error;
  }
};
