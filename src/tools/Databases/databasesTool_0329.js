/**
 * Generated Tool: databasesTool_0329
 * Domain: Databases
 * ID: 0329
 */
exports.databasesTool_0329 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0329:', error);
    throw error;
  }
};
