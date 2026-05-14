/**
 * Generated Tool: databasesTool_0062
 * Domain: Databases
 * ID: 0062
 */
exports.databasesTool_0062 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0062:', error);
    throw error;
  }
};
