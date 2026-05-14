/**
 * Generated Tool: databasesTool_0629
 * Domain: Databases
 * ID: 0629
 */
exports.databasesTool_0629 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0629:', error);
    throw error;
  }
};
