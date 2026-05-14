/**
 * Generated Tool: databasesTool_0380
 * Domain: Databases
 * ID: 0380
 */
exports.databasesTool_0380 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0380:', error);
    throw error;
  }
};
