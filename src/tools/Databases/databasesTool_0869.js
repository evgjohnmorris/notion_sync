/**
 * Generated Tool: databasesTool_0869
 * Domain: Databases
 * ID: 0869
 */
exports.databasesTool_0869 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0869:', error);
    throw error;
  }
};
