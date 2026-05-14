/**
 * Generated Tool: databasesTool_0097
 * Domain: Databases
 * ID: 0097
 */
exports.databasesTool_0097 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0097:', error);
    throw error;
  }
};
