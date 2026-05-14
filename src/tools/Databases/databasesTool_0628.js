/**
 * Generated Tool: databasesTool_0628
 * Domain: Databases
 * ID: 0628
 */
exports.databasesTool_0628 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0628:', error);
    throw error;
  }
};
