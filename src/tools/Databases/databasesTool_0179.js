/**
 * Generated Tool: databasesTool_0179
 * Domain: Databases
 * ID: 0179
 */
exports.databasesTool_0179 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0179:', error);
    throw error;
  }
};
