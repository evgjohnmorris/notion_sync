/**
 * Generated Tool: databasesTool_0722
 * Domain: Databases
 * ID: 0722
 */
exports.databasesTool_0722 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0722:', error);
    throw error;
  }
};
