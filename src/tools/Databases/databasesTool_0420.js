/**
 * Generated Tool: databasesTool_0420
 * Domain: Databases
 * ID: 0420
 */
exports.databasesTool_0420 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0420:', error);
    throw error;
  }
};
