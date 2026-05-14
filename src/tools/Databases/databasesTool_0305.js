/**
 * Generated Tool: databasesTool_0305
 * Domain: Databases
 * ID: 0305
 */
exports.databasesTool_0305 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0305:', error);
    throw error;
  }
};
