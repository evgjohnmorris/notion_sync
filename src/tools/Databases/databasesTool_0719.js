/**
 * Generated Tool: databasesTool_0719
 * Domain: Databases
 * ID: 0719
 */
exports.databasesTool_0719 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0719:', error);
    throw error;
  }
};
