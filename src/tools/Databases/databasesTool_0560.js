/**
 * Generated Tool: databasesTool_0560
 * Domain: Databases
 * ID: 0560
 */
exports.databasesTool_0560 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0560:', error);
    throw error;
  }
};
