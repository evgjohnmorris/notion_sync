/**
 * Generated Tool: databasesTool_0160
 * Domain: Databases
 * ID: 0160
 */
exports.databasesTool_0160 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0160:', error);
    throw error;
  }
};
