/**
 * Generated Tool: databasesTool_0453
 * Domain: Databases
 * ID: 0453
 */
exports.databasesTool_0453 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0453:', error);
    throw error;
  }
};
