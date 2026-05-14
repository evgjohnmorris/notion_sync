/**
 * Generated Tool: databasesTool_0487
 * Domain: Databases
 * ID: 0487
 */
exports.databasesTool_0487 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0487:', error);
    throw error;
  }
};
