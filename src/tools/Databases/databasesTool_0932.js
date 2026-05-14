/**
 * Generated Tool: databasesTool_0932
 * Domain: Databases
 * ID: 0932
 */
exports.databasesTool_0932 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0932:', error);
    throw error;
  }
};
