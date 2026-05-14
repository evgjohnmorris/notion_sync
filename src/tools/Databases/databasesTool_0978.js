/**
 * Generated Tool: databasesTool_0978
 * Domain: Databases
 * ID: 0978
 */
exports.databasesTool_0978 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0978:', error);
    throw error;
  }
};
