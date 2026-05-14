/**
 * Generated Tool: databasesTool_0183
 * Domain: Databases
 * ID: 0183
 */
exports.databasesTool_0183 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0183:', error);
    throw error;
  }
};
