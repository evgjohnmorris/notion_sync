/**
 * Generated Tool: databasesTool_0115
 * Domain: Databases
 * ID: 0115
 */
exports.databasesTool_0115 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0115:', error);
    throw error;
  }
};
