/**
 * Generated Tool: databasesTool_0260
 * Domain: Databases
 * ID: 0260
 */
exports.databasesTool_0260 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0260:', error);
    throw error;
  }
};
