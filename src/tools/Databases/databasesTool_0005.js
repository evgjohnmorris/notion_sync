/**
 * Generated Tool: databasesTool_0005
 * Domain: Databases
 * ID: 0005
 */
exports.databasesTool_0005 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0005:', error);
    throw error;
  }
};
