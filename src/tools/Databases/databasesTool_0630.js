/**
 * Generated Tool: databasesTool_0630
 * Domain: Databases
 * ID: 0630
 */
exports.databasesTool_0630 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0630:', error);
    throw error;
  }
};
