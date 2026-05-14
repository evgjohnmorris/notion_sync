/**
 * Generated Tool: databasesTool_0809
 * Domain: Databases
 * ID: 0809
 */
exports.databasesTool_0809 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0809:', error);
    throw error;
  }
};
