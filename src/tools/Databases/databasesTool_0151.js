/**
 * Generated Tool: databasesTool_0151
 * Domain: Databases
 * ID: 0151
 */
exports.databasesTool_0151 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0151:', error);
    throw error;
  }
};
