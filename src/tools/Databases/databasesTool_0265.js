/**
 * Generated Tool: databasesTool_0265
 * Domain: Databases
 * ID: 0265
 */
exports.databasesTool_0265 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0265:', error);
    throw error;
  }
};
