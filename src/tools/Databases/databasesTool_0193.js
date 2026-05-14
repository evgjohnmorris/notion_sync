/**
 * Generated Tool: databasesTool_0193
 * Domain: Databases
 * ID: 0193
 */
exports.databasesTool_0193 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0193:', error);
    throw error;
  }
};
