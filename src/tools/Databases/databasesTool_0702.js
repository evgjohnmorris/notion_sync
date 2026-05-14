/**
 * Generated Tool: databasesTool_0702
 * Domain: Databases
 * ID: 0702
 */
exports.databasesTool_0702 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0702:', error);
    throw error;
  }
};
