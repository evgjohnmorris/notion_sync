/**
 * Generated Tool: databasesTool_0945
 * Domain: Databases
 * ID: 0945
 */
exports.databasesTool_0945 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0945:', error);
    throw error;
  }
};
