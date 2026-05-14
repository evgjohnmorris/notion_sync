/**
 * Generated Tool: databasesTool_0365
 * Domain: Databases
 * ID: 0365
 */
exports.databasesTool_0365 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0365:', error);
    throw error;
  }
};
