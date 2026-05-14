/**
 * Generated Tool: databasesTool_0185
 * Domain: Databases
 * ID: 0185
 */
exports.databasesTool_0185 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0185:', error);
    throw error;
  }
};
