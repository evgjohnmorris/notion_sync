/**
 * Generated Tool: databasesTool_0412
 * Domain: Databases
 * ID: 0412
 */
exports.databasesTool_0412 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0412:', error);
    throw error;
  }
};
