/**
 * Generated Tool: databasesTool_0017
 * Domain: Databases
 * ID: 0017
 */
exports.databasesTool_0017 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0017:', error);
    throw error;
  }
};
