/**
 * Generated Tool: databasesTool_0888
 * Domain: Databases
 * ID: 0888
 */
exports.databasesTool_0888 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0888:', error);
    throw error;
  }
};
