/**
 * Generated Tool: databasesTool_0510
 * Domain: Databases
 * ID: 0510
 */
exports.databasesTool_0510 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0510:', error);
    throw error;
  }
};
