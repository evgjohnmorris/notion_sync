/**
 * Generated Tool: databasesTool_0411
 * Domain: Databases
 * ID: 0411
 */
exports.databasesTool_0411 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0411:', error);
    throw error;
  }
};
