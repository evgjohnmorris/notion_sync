/**
 * Generated Tool: databasesTool_0430
 * Domain: Databases
 * ID: 0430
 */
exports.databasesTool_0430 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0430:', error);
    throw error;
  }
};
