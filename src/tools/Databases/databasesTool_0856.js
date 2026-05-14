/**
 * Generated Tool: databasesTool_0856
 * Domain: Databases
 * ID: 0856
 */
exports.databasesTool_0856 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0856:', error);
    throw error;
  }
};
