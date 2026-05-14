/**
 * Generated Tool: databasesTool_0250
 * Domain: Databases
 * ID: 0250
 */
exports.databasesTool_0250 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0250:', error);
    throw error;
  }
};
