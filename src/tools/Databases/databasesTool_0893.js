/**
 * Generated Tool: databasesTool_0893
 * Domain: Databases
 * ID: 0893
 */
exports.databasesTool_0893 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0893:', error);
    throw error;
  }
};
