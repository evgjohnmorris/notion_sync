/**
 * Generated Tool: databasesTool_0326
 * Domain: Databases
 * ID: 0326
 */
exports.databasesTool_0326 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0326:', error);
    throw error;
  }
};
