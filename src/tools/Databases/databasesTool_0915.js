/**
 * Generated Tool: databasesTool_0915
 * Domain: Databases
 * ID: 0915
 */
exports.databasesTool_0915 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0915:', error);
    throw error;
  }
};
