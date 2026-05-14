/**
 * Generated Tool: databasesTool_0555
 * Domain: Databases
 * ID: 0555
 */
exports.databasesTool_0555 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0555:', error);
    throw error;
  }
};
