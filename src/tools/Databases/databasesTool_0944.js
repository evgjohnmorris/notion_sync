/**
 * Generated Tool: databasesTool_0944
 * Domain: Databases
 * ID: 0944
 */
exports.databasesTool_0944 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0944:', error);
    throw error;
  }
};
