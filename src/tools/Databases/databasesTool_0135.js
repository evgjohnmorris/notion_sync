/**
 * Generated Tool: databasesTool_0135
 * Domain: Databases
 * ID: 0135
 */
exports.databasesTool_0135 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0135:', error);
    throw error;
  }
};
