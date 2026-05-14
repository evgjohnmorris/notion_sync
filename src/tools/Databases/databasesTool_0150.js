/**
 * Generated Tool: databasesTool_0150
 * Domain: Databases
 * ID: 0150
 */
exports.databasesTool_0150 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0150:', error);
    throw error;
  }
};
