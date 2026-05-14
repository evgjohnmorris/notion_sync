/**
 * Generated Tool: databasesTool_0540
 * Domain: Databases
 * ID: 0540
 */
exports.databasesTool_0540 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0540:', error);
    throw error;
  }
};
