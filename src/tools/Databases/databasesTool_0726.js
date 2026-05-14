/**
 * Generated Tool: databasesTool_0726
 * Domain: Databases
 * ID: 0726
 */
exports.databasesTool_0726 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0726:', error);
    throw error;
  }
};
